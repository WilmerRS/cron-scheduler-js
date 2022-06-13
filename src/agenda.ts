import Agenda from "agenda";

const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.js")[env];

const agenda = new Agenda({
  db: {
    address: "mongodb://localhost:27017/cron-scheduler-js",
    collection: "agendaJobs",
  },
});

export default agenda;
