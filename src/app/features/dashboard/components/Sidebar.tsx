'use client';

import { useState } from 'react';
import {
  User, Building2, Layers, HardDrive,
  FileText, Wrench, Warehouse, BarChart2,
  ChevronDown, ChevronRight, Menu
} from 'lucide-react';
import clsx from 'clsx';

const menu = [
  {
    label: 'Người dùng',
    icon: <User size={18} color="#4C6EF5" />,
    children: [
      {
        label: 'Quản lý tài khoản',
        children: ['Đăng Nhập', 'Đăng xuất', 'Quên mật khẩu', 'Thay đổi mật khẩu']
      },
      {
        label: 'Phân quyền',
        children: ['Quản lý nhóm quyền', 'Quản lý phân quyền']
      }
    ]
  },
  {
    label: 'Đối tác',
    icon: <Building2 size={18} color="#E91E63" />,
    children: [
      { label: 'Nhà cung cấp' },
      { label: 'Đơn vị bảo trì' },
      { label: 'Đơn vị sửa chữa' }
    ]
  },
  {
    label: 'Khoa Phòng',
    icon: <Layers size={18} color="#FF5722" />,
    children: [
      { label: 'Quản lý DS khoa phòng' }
    ]
  },
  {
    label: 'Thiết bị',
    icon: <HardDrive size={18} color="#00BCD4" />,
    children: [
      { label: 'Nhóm thiết bị' },
      { label: 'Danh mục thiết bị' },
      { label: 'Thông tin thiết bị' },
      { label: 'Hồ sơ thiết bị' }
    ]
  },
  {
    label: 'Hợp đồng',
    icon: <FileText size={18} color="#4CAF50" />,
    children: [
      { label: 'Mua sắm' },
      { label: 'Bảo hành' },
      { label: 'Thanh lý' }
    ]
  },
  {
    label: 'Bảo trì',
    icon: <Wrench size={18} color="#FF9800" />,
    children: [
      { label: 'Kế hoạch bảo trì' },
      { label: 'Lịch sử bảo trì' },
      { label: 'Cảnh báo bảo trì' }
    ]
  },
  {
    label: 'Sửa chữa',
    icon: <Wrench size={18} color="#9C27B0" />,
    children: [
      { label: 'Yêu cầu sửa chữa' },
      { label: 'Lịch sử sửa chữa' },
      { label: 'Chi phí sửa chữa' }
    ]
  },
  {
    label: 'Kho',
    icon: <Warehouse size={18} color="#FFEB3B" />,
    children: [
      { label: 'Quản lý kho' },
      { label: 'Nhập kho' },
      { label: 'Xuất kho' }
    ]
  },
  {
    label: 'Báo cáo',
    icon: <BarChart2 size={18} color="#9E9E9E" />,
    children: [
      { label: 'Báo cáo thống kê' },
      { label: 'Báo cáo tình trạng' },
      { label: 'Báo cáo chi phí' }
    ]
  }
];

export function Sidebar() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = (label: string) => {
    setOpenItems(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      {/* Toggle button (chỉ hiện trên mobile) */}
      <div className="lg:hidden p-4">
        <button onClick={() => setShowSidebar(!showSidebar)} className="text-indigo-700 hover:text-indigo-500">
          <Menu size={24} />
        </button>
      </div>

      <aside
        className={clsx(
          'fixed top-0 left-0 w-64 min-h-screen bg-white shadow-md p-4 z-50 transition-transform duration-300',
          {
            '-translate-x-full': !showSidebar,
            'translate-x-0': showSidebar,
            'lg:translate-x-0 lg:static lg:block': true
          }
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-indigo-700">MEMS System</h1>
          <button className="lg:hidden" onClick={() => setShowSidebar(false)}>
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type here..."
          className="w-full px-3 py-2 border rounded mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <nav className="text-sm">
          {menu.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex justify-between items-center text-left font-medium py-2 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200"
                onClick={() => toggle(item.label)}
              >
                <div className="flex gap-2 items-center">
                  {item.icon}
                  {item.label}
                </div>
                {item.children ? (
                  openItems[item.label] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )
                ) : null}
              </button>
              {item.children && openItems[item.label] && (
                <ul className="ml-6 border-l pl-2 mb-2 text-gray-700">
                  {item.children.map((child: any) =>
                    child.children ? (
                      <div key={child.label}>
                        <p className="font-semibold text-gray-600 mt-2">{child.label}</p>
                        <ul className="ml-4">
                          {child.children.map((sub: string) => (
                            <li
                              key={sub}
                              className="py-1 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <li
                        key={child.label}
                        className="py-1 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200"
                      >
                        {child.label}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay đen mờ khi mở menu mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
}
