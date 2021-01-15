import { API_URL, TOKEN } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
export const TOP_HEADLINES_FETCHED = "TOP_HEADLINES_FETCHED";

export function fetchTopHeadlines() {
  return async function thunk(dispatch, getState) {
    dispatch(appLoading());
    const res = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const topHeadlines = res.data;
    console.log("top", topHeadlines);

    dispatch(allTopheadlinesFetched(topHeadlines));
    dispatch(appDoneLoading());
  };
}

export function allTopheadlinesFetched(topHeadlines) {
  return {
    type: TOP_HEADLINES_FETCHED,
    payload: topHeadlines,
  };
}
