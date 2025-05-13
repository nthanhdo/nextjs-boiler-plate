/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',  // Cấu hình đường dẫn tới các file trong app
        './pages/**/*.{js,ts,jsx,tsx}', // Cấu hình đường dẫn tới các file trong pages
        './components/**/*.{js,ts,jsx,tsx}',  // Cấu hình đường dẫn tới các file trong components
    ],
    theme: {
        extend: {
            // Bạn có thể mở rộng theme ở đây, ví dụ như màu sắc, font, v.v.
            colors: {
                primary: '#3490dc',
                secondary: '#ffed4a',
            },
        },
    },
    plugins: [
        daisyui,  // Thêm DaisyUI vào các plugin
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"],  // Các theme có sẵn của DaisyUI, bạn có thể thay đổi theo ý muốn
    },
}
