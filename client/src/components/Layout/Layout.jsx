import React from "react";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <Toaster />
        {children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Eqaim - Blog",
  description: "create, read, delete blogs",
  keywords: "mern,react,node,express,mongodb",
  author: "bikash",
};

export default Layout;
