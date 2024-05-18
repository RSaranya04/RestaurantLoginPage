import { useEffect, useState } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantCard from "../components/RestaurantCard";

const RestaurantList = () => {

//TODO: initalize retsturant state.
  /**
 * Fetch the list of restaurants from RestaurantService and updates the component state.
 * Sets the state to display loading indicator during data fetch from service.
 */
  async function fetchRestaurantList() {
    //setRestaurantState({...restaurantState, isLoading:true})
    let restaurantsList = await RestaurantService.getRestaurantsList();
   //TODO: set states according to the result.
  }

  useEffect(() => {
    fetchRestaurantList();
  }, [])


  return (
    <div className="restaurant-list-container">
      <HeaderBar />
      <div className="restaurant-list-wrapper child">
        {
          data.length
        }
      </div>
    </div>
  );
}

export default RestaurantList;
