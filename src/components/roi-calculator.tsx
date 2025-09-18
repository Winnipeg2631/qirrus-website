
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RoiData {
  locations: number;
  daysOpen: number;
  totalTables: number;
  avgCapacity: number;
  avgSpend: number;
  premiumTablesPercent: number;
  premiumFee: number;
}

interface RoiResults {
  numPremiumTables: number;
  potentialBookings: number;
  grossRevenue: number;
  yourShare: number;
  newRevenue: number;
  uptakePercent: number;
  monthlyRevenueIncrease: number;
  annualRevenue: number;
}

export function RoiCalculator() {
  const [data, setData] = useState<RoiData>({
    locations: 1,
    daysOpen: 22,
    totalTables: 40,
    avgCapacity: 75,
    avgSpend: 85,
    premiumTablesPercent: 15,
    premiumFee: 20,
  });

  const [results, setResults] = useState<RoiResults | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSliderChange = (name: keyof RoiData, value: number[]) => {
    setData(prev => ({ ...prev, [name]: value[0] }));
  };

  const handleInputChange = (name: keyof RoiData, value: string) => {
    const numValue = Number(value.replace(/[^0-9.-]+/g,""));
    setData(prev => ({ ...prev, [name]: isNaN(numValue) ? 0 : numValue }));
  };

  const handleSelectChange = (value: string) => {
    setData(prev => ({...prev, locations: parseInt(value, 10)}));
  }

  const calculateROI = (currentData: RoiData) => {
    const turnsPerDay = 3.75; 
    
    const numPremiumTables = Math.round(currentData.totalTables * (currentData.premiumTablesPercent / 100));
    
    const dailyPremiumSeatings = numPremiumTables * turnsPerDay * (currentData.avgCapacity / 100);
    const potentialBookings = Math.round(dailyPremiumSeatings * currentData.daysOpen);

    const grossRevenue = potentialBookings * currentData.premiumFee;
    const yourShare = grossRevenue * 0.80;
    
    const totalPotentialSeatings = currentData.totalTables * turnsPerDay * currentData.daysOpen * (currentData.avgCapacity / 100);
    const currentMonthlyRevenue = totalPotentialSeatings * currentData.avgSpend / currentData.locations;
    
    const monthlyRevenueIncrease = currentMonthlyRevenue > 0 ? (yourShare / currentMonthlyRevenue) * 100 : 0;
    const annualRevenue = yourShare * 12;

    setResults({
      numPremiumTables,
      potentialBookings,
      grossRevenue,
      yourShare,
      newRevenue: yourShare,
      uptakePercent: 0.15 * 100,
      monthlyRevenueIncrease,
      annualRevenue,
    });
  };

  useEffect(() => {
    if (isCalculated) {
      calculateROI(data);
    }
  }, [data, isCalculated]);

  const handleCalculateClick = () => {
    setIsCalculated(true);
    calculateROI(data);
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  }

  return (
    <Card className="w-full max-w-lg bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>See Your Earnings Potential</CardTitle>
        <CardDescription>Adjust the sliders to match your business and project your revenue.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 items-center">
            <Label>Number of Locations</Label>
            <Select value={String(data.locations)} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Days Open Per Month</Label>
              <span className="text-sm font-medium">{data.daysOpen}</span>
            </div>
            <Slider defaultValue={[22]} min={10} max={31} step={1} onValueChange={(v) => handleSliderChange('daysOpen', v)} />
          </div>

          <div className="space-y-2">
             <div className="flex justify-between">
              <Label>Total Tables in Restaurant</Label>
              <span className="text-sm font-medium">{data.totalTables}</span>
            </div>
            <Slider defaultValue={[40]} min={10} max={100} step={1} onValueChange={(v) => handleSliderChange('totalTables', v)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
                <Label>Average Daily Capacity</Label>
                <span className="text-sm font-medium">{data.avgCapacity}%</span>
            </div>
            <Slider defaultValue={[75]} min={25} max={100} step={5} onValueChange={(v) => handleSliderChange('avgCapacity', v)} />
          </div>
          
           <div className="grid grid-cols-2 gap-4 items-center">
            <Label>Average Spend Per Table</Label>
            <Input value={`$${data.avgSpend}`} onChange={(e) => handleInputChange('avgSpend', e.target.value)} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
                <Label>% of Tables Designated as "Premium"</Label>
                <span className="text-sm font-medium">{data.premiumTablesPercent}%</span>
            </div>
            <Slider defaultValue={[15]} min={5} max={30} step={1} onValueChange={(v) => handleSliderChange('premiumTablesPercent', v)} />
            <p className="text-xs text-muted-foreground">We recommend starting with your best 10-20% of tables.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 items-center">
            <Label>Premium Table Fee</Label>
            <Input value={`$${data.premiumFee}`} onChange={(e) => handleInputChange('premiumFee', e.target.value)} />
             <p className="text-xs text-muted-foreground col-span-2">What will diners pay to secure these tables?</p>
          </div>

          <Button onClick={handleCalculateClick} className="w-full">Calculate My Revenue</Button>
        </div>

        {results && (
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold">Your Projected Monthly Revenue</h3>
            <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Number of Premium Tables</span> <strong>{results.numPremiumTables}</strong></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Potential Premium Bookings Per Month</span> <strong>{results.potentialBookings}</strong></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Gross Revenue from Table Fees</span> <strong>{formatCurrency(results.grossRevenue)}</strong></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Your Share (80%)</span> <strong>{formatCurrency(results.yourShare)}</strong></div>
                <div className="flex justify-between text-base font-bold"><span >Your New Revenue</span> <span className="text-accent">{formatCurrency(results.newRevenue)}</span></div>
            </div>
             <div className="mt-4 pt-4 border-t">
                 <h4 className="font-semibold">Impact on Your Business:</h4>
                 <div className="mt-2 space-y-2 text-sm">
                     <div className="flex justify-between"><span className="text-muted-foreground">Percentage Increase in Monthly Revenue</span> <strong>{results.monthlyRevenueIncrease.toFixed(2)}%</strong></div>
                     <div className="flex justify-between text-base font-bold"><span >Projected Annual New Revenue</span> <span className="text-accent">{formatCurrency(results.annualRevenue)}</span></div>
                 </div>
             </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
