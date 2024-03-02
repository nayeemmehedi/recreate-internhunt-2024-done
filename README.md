# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





   <div>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/fullpage/:id">
            <FullPage></FullPage>
          </Route>

          <PrivateRoute path="/FormCV/:id">
            <FormCV></FormCV>
          </PrivateRoute>

          <PrivateRoute path="/FormCV">
            {/* Redirect from /old-path to /new-path */}
            <Redirect to="/" />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <NewPrivateRouter path="/company/nayeem">
            <Company />
          </NewPrivateRouter>
          <NewPrivateRouter path="/approve">
            <ApproveCV />
          </NewPrivateRouter>

          <Route path="/company">
            <Company />
          </Route>

          <PrivateRoute path="/carduser">
            <CardUser />
          </PrivateRoute>

          <PrivateRoute path="/hire">
            <HireU />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/companysignup">
            <CompanySignUp />
          </Route>
          <Route path="/companylogin">
            <CompanyLogin />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>