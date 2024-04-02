import React from "react";

/// React router dom
import { Switch, Route } from "react-router-dom";
import Nav from "./layouts/nav";
import ScrollToTop from "./layouts/ScrollTop";
import LoginForm from "../jsx/components/auth/LoginForm";
import Home from "./components/dashboard/Home";
import ProductAdd from "./components/products/ProductAdd";
import ProductList from "./components/products/ProductList";
import ProductEdit from "./components/products/ProductEdit";




const Markup = () => {
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "dashboard", component: Home },
    { url: "login", component: LoginForm },
    { url: "product-add", component: ProductAdd },
    { url: "product-list", component: ProductList },
    { url: "product-edit/:id", component: ProductEdit },

  ];
  // let path = window.location.pathname;
  // path = path.split("/");
  // path = path[path.length - 1];

  // let pagePath = path.split("-").includes("page");
  return (
    <>
      <div className="main-wrapper mh100vh menu-toggle">
        <Nav />

        <div className="container content-body d-flex flex-column flex-fill">
          {/* Set consistent container with flex for responsiveness */}
          <div className="container-fluid flex-grow-1 overflow-auto">
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </>
  );
};

export default Markup;
