
import { Provider} from 'react-redux';
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
        <Navbar />
            <Component {...pageProps} />
        </ParentComponent>
      </Provider>
    </>
  );
}
