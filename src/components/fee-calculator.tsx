
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FeeData {
  averageOrder: string;
  pickupOrders: string;
  deliveryOrders: string;
  currentCommissionPercent: string;
}

interface FeeResults {
  totalCurrentFees: number;
  totalQirrusFees: number;
  monthlySavings: number;
  annualSavings: number;
  qirrusCommission: number;
  qirrusDeliveryFees: number;
  qirrusCardFees: number;
  qirrusOrderFees: number;
  qirrusTransactionFees: number;
}

const QIRRUS_COMMISSION_PERCENT = 0.15;
const QIRRUS_DELIVERY_FEE = 7.50;
const QIRRUS_CARD_PROCESSING_PERCENT = 0.0175;
const QIRRUS_ORDER_FEE = 0.45;
const QIRRUS_TRANSACTION_FEE = 0.20;

export function FeeCalculator() {
  const [data, setData] = useState<FeeData>({
    averageOrder: '55',
    pickupOrders: '300',
    deliveryOrders: '300',
    currentCommissionPercent: '25',
  });
  const [results, setResults] = useState<FeeResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const calculateFees = () => {
    const averageOrder = parseFloat(data.averageOrder) || 0;
    const pickupOrders = parseInt(data.pickupOrders, 10) || 0;
    const deliveryOrders = parseInt(data.deliveryOrders, 10) || 0;
    
    const totalOrders = pickupOrders + deliveryOrders;
    const totalVolume = averageOrder * totalOrders;
    
    const currentCommissionPercent = parseFloat(data.currentCommissionPercent) / 100 || 0;

    // Current Fees Calculation
    const totalCurrentFees = totalVolume * currentCommissionPercent;

    // Qirrus Fees Calculation
    const qirrusCommission = totalVolume * QIRRUS_COMMISSION_PERCENT;
    const qirrusDeliveryFees = deliveryOrders * QIRRUS_DELIVERY_FEE;
    const qirrusCardFees = totalVolume * QIRRUS_CARD_PROCESSING_PERCENT;
    const qirrusOrderFees = totalOrders * QIRRUS_ORDER_FEE;
    const qirrusTransactionFees = totalOrders * QIRRUS_TRANSACTION_FEE;
    
    const totalQirrusFees = qirrusCommission + qirrusDeliveryFees + qirrusCardFees + qirrusOrderFees + qirrusTransactionFees;

    const monthlySavings = totalCurrentFees - totalQirrusFees;
    const annualSavings = monthlySavings * 12;

    setResults({
      totalCurrentFees,
      totalQirrusFees,
      monthlySavings,
      annualSavings,
      qirrusCommission,
      qirrusDeliveryFees,
      qirrusCardFees,
      qirrusOrderFees,
      qirrusTransactionFees,
    });
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value);
  }

  return (
    <Card className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle>Online card & delivery fee savings calculator</CardTitle>
        <CardDescription>Enter your details to see how much you could save with Qirrus for online orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div>
              <Label htmlFor="averageOrder">Average order value</Label>
              <Input
                id="averageOrder"
                name="averageOrder"
                value={data.averageOrder}
                onChange={handleInputChange}
                placeholder="$55"
              />
            </div>
            <div>
              <Label htmlFor="pickupOrders">Pickup orders</Label>
              <Input
                id="pickupOrders"
                name="pickupOrders"
                value={data.pickupOrders}
                onChange={handleInputChange}
                placeholder="300"
              />
            </div>
            <div>
              <Label htmlFor="deliveryOrders">Number of delivery orders</Label>
              <Input
                id="deliveryOrders"
                name="deliveryOrders"
                value={data.deliveryOrders}
                onChange={handleInputChange}
                placeholder="300"
              />
            </div>
             <div>
                <Label htmlFor="currentCommissionPercent">Your current delivery commission fee (%)</Label>
                <Input
                    id="currentCommissionPercent"
                    name="currentCommissionPercent"
                    value={data.currentCommissionPercent}
                    onChange={handleInputChange}
                    placeholder="25"
                />
            </div>
             <Button onClick={calculateFees} className="w-full">Calculate Savings</Button>
          </div>
          <div className="md:col-span-2">
            {results ? (
                 <div className="bg-muted p-6 rounded-lg h-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-center sm:text-left">Your Current Provider</h4>
                        <div className="bg-background/50 p-4 rounded-md space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Total Monthly Fees</span>
                            <span className="font-bold">{formatCurrency(results.totalCurrentFees)}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-center sm:text-left">With Qirrus</h4>
                         <div className="bg-background/50 p-4 rounded-md space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">3rd Party Commission (15%)</span>
                            <span>{formatCurrency(results.qirrusCommission)}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">Delivery Fees</span>
                            <span>{formatCurrency(results.qirrusDeliveryFees)}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">Card Processing (1.75%)</span>
                            <span>{formatCurrency(results.qirrusCardFees)}</span>
                          </div>
                           <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">Per Order Fee ($0.45)</span>
                            <span>{formatCurrency(results.qirrusOrderFees)}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-muted-foreground">Per Transaction Fee ($0.20)</span>
                            <span>{formatCurrency(results.qirrusTransactionFees)}</span>
                          </div>
                          <div className="flex justify-between items-center border-t pt-2 mt-2">
                            <span className="text-sm text-muted-foreground">Total Monthly Fees</span>
                            <span className="font-bold">{formatCurrency(results.totalQirrusFees)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">Your Potential Monthly Savings</p>
                        <p className="text-3xl font-bold text-primary">{formatCurrency(results.monthlySavings)}</p>
                    </div>
                     <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground">That's an annual savings of</p>
                        <p className="text-xl font-bold">{formatCurrency(results.annualSavings)}</p>
                    </div>
                    <div className="text-xs text-muted-foreground text-center mt-4 space-y-1">
                        <p><strong>Note:</strong> What is collected by Qirrus on behalf of delivery platforms. The restaurant will see a reduced commission fee due to the fact, Qirrus processes the order and the restaurant uses their own credit card processor to process credit card transactions, leading to less fees.</p>
                        <p>Savings are estimates and may vary.</p>
                    </div>
                 </div>
            ) : (
                <div className="bg-muted p-6 rounded-lg h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Enter your details and click calculate to see your savings.</p>
                </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
