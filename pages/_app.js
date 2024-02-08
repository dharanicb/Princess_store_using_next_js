
import { Provider, useDispatch, useSelector } from 'react-redux';
import "@/styles/globals.css";
import { store } from "@/Store";
import dynamic from "next/dynamic";
import ErrorPopup from '@/Components/ErrorPopUp';
import Loader from '@/Components/Loader';
import ParentComponent from '@/Components/ParentComponent';

const Navbar = dynamic(() => import("@/Components/Navbar"), {
  ssr: false,
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ParentComponent>
        <Navbar />
            <Component {...pageProps} />
        </ParentComponent>
      </Provider>
    </>
  );
}
