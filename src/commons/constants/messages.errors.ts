export const MessagesErrors = (name: string | undefined) => ({
  // Validations
  isRequired: `The ${name} field is required.`,
  lengthMin11: `The ${name} field must have a minimum length of 10 characters.`,
  lengthMin14: `The ${name} field must have a minimum length of 14 characters.`,
  documentNumberInvalid: `The ${name} field is invalid.`,

  errorPostRecord: `Error registering record.`,
  errorUpdateRecord: `Error updatting record.`,
  errorDeleteRecord: `Error deletting record.`,
  errorGetRecord: `Error getting record.`,
});

export const MessagesWarning = (value: any) => ({
  totalAreaMinor: `The total area is less than the sum of the total vegetation area and the total arable area.`,
  requestAreaNotAvaliabe: `Requested area not available, area available: ${value}`,

  errorConflict: `There is already a producer with this document.`,
  recordNotUpdate: `Record not updated.`,
  recordNotDeleted: `Record not deleted.`,
  recordDeleted: `Record deleted succesfully.`,
  recordNotFound: `Record not found.`,
});

export const MessagesInfos = () => ({
  producerDeleted: `Producer deleted succesfully.`,
});
