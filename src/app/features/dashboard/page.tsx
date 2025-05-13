import { DashboardLayout } from './components/Layout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Nội dung chính để trống hoặc đặt component tùy ý */}
      <div className="text-center text-gray-400 mt-20">No data available</div>
    </DashboardLayout>
  );
}
