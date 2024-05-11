export const MessagesErrors = (name: string | undefined) => ({
  // Validations
  isRequired: `The ${name} field is required.`,
  messageNumber: `The ${name} field is required and must be a number.`,
  messageString: `The ${name} field is required and must be a string.`,
  messageInvalid: `The ${name} field is invalid.`,
  messageDocument: `The ${name} field is required and must be a document.`,
  messageLengthMin: `The ${name} field must have a minimum length of 3 characters.`,
  messageLengthMax: `The ${name} field must have a maximum length of 100 characters.`,
  messageLengthMin2: `The ${name} field must have a minimum length of 2 characters.`,
  messageLengthMax2: `The ${name} field must have a maximum length of 2 characters.`,
  messageLengthMin3: `The ${name} field must have a minimum length of 3 characters.`,
  messageLengthMax3: `The ${name} field must have a maximum length of 3 characters.`,
  messageLengthMin4: `The ${name} field must have a minimum length of 4 characters.`,
  messageLengthMax4: `The ${name} field must have a maximum length of 4 characters.`,
  messageLengthMin5: `The ${name} field must have a minimum length of 5 characters.`,
  messageLengthMax5: `The ${name} field must have a maximum length of 5 characters.`,
  messageLengthMin6: `The ${name} field must have a minimum length of 6 characters.`,
  messageLengthMax6: `The ${name} field must have a maximum length of 6 characters.`,
  messageLengthMin7: `The ${name} field must have a minimum length of 7 characters.`,
  messageLengthMax7: `The ${name} field must have a maximum length of 7 characters.`,
  messageLengthMin8: `The ${name} field must have a minimum length of 8 characters.`,
  messageLengthMax8: `The ${name} field must have a maximum length of 8 characters.`,
  messageLengthMin9: `The ${name} field must have a minimum length of 9 characters.`,
  messageLengthMax9: `The ${name} field must have a maximum length of 9 characters.`,
  messageLengthMin10: `The ${name} field must have a minimum length of 10 characters.`,
  messageLengthMin11: `The ${name} field must have a minimum length of 10 characters.`,
  messageLengthMin14: `The ${name} field must have a minimum length of 14 characters.`,
  documentNumberInvalid: `The ${name} field is invalid.`,

  // Database message
  dbConflict: `There is already a producer with this document.`,
});

export const MessagesWarning = () => ({
  // Business messages
  totalAreaMinor: `The total area is less than the sum of the total vegetation area and the total arable area.`,

  // Database messages
  dbPorducerNotUpdated: `Producer not updated.`,
  dbProducerUpdated: `Producer updated.`,
  dbProducerNotDeleted: `Producer not deleted.`,
  dbProducerDeleted: `Producer deleted succesfully.`,
});
