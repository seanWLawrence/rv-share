import ReactOnRails from "react-on-rails";

import {
  NewListing,
  GridListing,
  PageListing
} from "../bundles/Listings/components/Listings";

// This is how react_on_rails can see the component in the browser.
ReactOnRails.register({
  NewListing,
  GridListing,
  PageListing
});
