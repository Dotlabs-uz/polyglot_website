import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Script from "next/script";
import React from "react";

type Layout = {
   children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
   return (
      <>
         <Head>
            <React.Fragment>
               <script dangerouslySetInnerHTML={{
                  __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
               n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1580211606041469');
            fbq('track', 'PageView');` }}
               />
               <noscript dangerouslySetInnerHTML={{
                  __html: `<img height="1" width="1" style="display:none"
                     src="https://www.facebook.com/tr?id=1580211606041469&ev=PageView&noscript=1" />` }}
               />
            </React.Fragment>
         </Head>

         <Header />
         <main>{children}</main>
         <Footer />

      </>
   );
};

export default Layout;
