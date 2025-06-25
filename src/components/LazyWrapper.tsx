
import React, { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultFallback = () => (
  <Card className="w-full">
    <CardContent className="p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-32 bg-slate-200 rounded"></div>
      </div>
    </CardContent>
  </Card>
);

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <DefaultFallback />,
  className = ""
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default LazyWrapper;
