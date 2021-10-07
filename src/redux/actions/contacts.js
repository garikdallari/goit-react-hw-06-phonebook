import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "../types";
import nextId from "react-id-generator";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: {
    id: nextId(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContact = (value) => ({
  type: FILTER_CONTACT,
  payload: value,
});
