const express = require("express");

const createError = require("http-errors");
const appConfig = require("./api/config/appConfig");

const restricted = require("./api/auth/authenticate-middleware");
const indexRouter = require("./bin");
const authRouter = require("./api/auth/auth-router");
const usersRouter = require("./api/users/users-router");
const personalRouter = require("./api/personalBudget/personalBudget.router");
const relocateRouter = require("./api/relocateBudget/relocateBudget.router");

const app = express();
appConfig(app);

// routers
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", restricted, usersRouter);
app.use("/users", restricted, relocateRouter);
app.use("/users", restricted, personalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res
    .status(err.status || 500)
    .json(`WHY THE HELL DID I RECIEVE A ${err.status} ERROR`);
});

module.exports = app;
