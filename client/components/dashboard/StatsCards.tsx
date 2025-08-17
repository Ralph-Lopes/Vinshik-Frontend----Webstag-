import { Check, Clock, AlertCircle } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const StatCard = ({ title, value, icon, bgGradient }: StatCardProps) => (
  <div className={`w-[158px] h-[80px] rounded-[29px] ${bgGradient} flex items-center justify-center relative`}>
    <div className="absolute left-4 top-4">
      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="text-center mt-2">
      <div className="text-white font-poppins text-2xl font-normal">{value}</div>
      <div className="text-white font-poppins text-xs font-normal">{title}</div>
    </div>
  </div>
);

export const StatsCards = () => {
  return (
    <div className="flex gap-5">
      <StatCard
        title="Total Task"
        value="1220"
        icon={<Check className="w-6 h-6 text-[#9E9EF7]" />}
        bgGradient="bg-gradient-to-r from-[rgba(131,132,248,0.77)] to-[rgba(131,132,248,0.42)]"
      />
      <StatCard
        title="InProgress"
        value="07"
        icon={<Clock className="w-6 h-6 text-[#BAE0E6] opacity-90" />}
        bgGradient="bg-gradient-to-r from-[rgba(150,201,209,0.81)] to-[rgba(173,220,227,0.58)]"
      />
      <StatCard
        title="Pending"
        value="43"
        icon={<AlertCircle className="w-6 h-6 text-[#F7CCC8]" />}
        bgGradient="bg-gradient-to-r from-[rgba(251,149,141,0.58)] to-[rgba(248,176,169,0.43)]"
      />
      <StatCard
        title="completed"
        value="1550"
        icon={<Check className="w-6 h-6 text-[#A4EEC2]" />}
        bgGradient="bg-gradient-to-r from-[rgba(135,236,175,0.73)] to-[rgba(135,236,175,0.41)]"
      />
    </div>
  );
};
