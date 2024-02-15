
import { Provider } from 'react-redux';
import "@/styles/globals.css";
import { store } from "@/Store";
import dynamic from "next/dynamic";
import ParentComponent from '@/Components/ParentComponent';

const Navbar = dynamic(() => import("@/Components/Navbar"), {
  ssr: false,
});
// const ParentComponent = dynamic(() => import("@/Components/ParentComponent"), {
//   ssr: false,
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ParentComponent>
        <div className='h-screen flex flex-col'>
          <div className='h-[80px] fixed z-10 w-full'>

          <Navbar />
          </div>
          <div className='pt-[100px] flex-grow overflow-auto'>
            <Component {...pageProps} />
          </div>
        </div>
        </ParentComponent>
      </Provider>
    </>
  );
}
