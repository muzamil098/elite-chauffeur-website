import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { AirportTransfers } from "./pages/services/AirportTransfers";
import { CorporateChauffeur } from "./pages/services/CorporateChauffeur";
import { EventsWeddings } from "./pages/services/EventsWeddings";
import { Fleet } from "./pages/Fleet";
import { VehicleDetails } from "./pages/VehicleDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "services/airport-transfers", Component: AirportTransfers },
      { path: "services/corporate-chauffeur", Component: CorporateChauffeur },
      { path: "services/events-weddings", Component: EventsWeddings },
      { path: "fleet", Component: Fleet },
      { path: "fleet/:vehicleId", Component: VehicleDetails },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
