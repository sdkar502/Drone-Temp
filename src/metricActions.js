export function setFormField(fieldName, fieldValue) {
  return {
    type: "UPDATE_FORM_FIELD",
    payload: { fieldName, fieldValue }
  };
}
