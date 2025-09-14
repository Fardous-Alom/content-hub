import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, value, change, changeType, icon, trend }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-error';
    return 'text-muted-foreground';
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 soft-shadow hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name={icon} size={20} className="text-primary" />
          </div>
          <h3 className="font-heading font-medium text-sm text-muted-foreground">{title}</h3>
        </div>
        <Icon name={getChangeIcon()} size={16} className={getChangeColor()} />
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-medium ${getChangeColor()}`}>
            {change}
          </span>
          <span className="text-xs text-muted-foreground">vs last period</span>
        </div>
      </div>
      {trend && (
        <div className="mt-4 h-12 flex items-end space-x-1">
          {trend?.map((point, index) => (
            <div
              key={index}
              className="flex-1 bg-primary/20 rounded-sm"
              style={{ height: `${point}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MetricCard;