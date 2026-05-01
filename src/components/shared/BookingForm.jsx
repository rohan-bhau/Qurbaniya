"use client";

import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export function BookingForm() {
  const onSubmit = (e) => {
    e.preventDefault();

      toast.success("Booking Successfull",{position:"top-left"})
      e.target.reset(); 
  };

  return (
    <Form className="w-full max-w-96 mx-auto " onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className="font-bold mb-6">
          Book This Animal
        </Fieldset.Legend>
        <FieldGroup>
          <TextField
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input className={"rounded-md"} placeholder="John Doe" />
            <FieldError />
          </TextField>

          <TextField name="email" type="email">
            <Label>Email</Label>
            <Input className={"rounded-md"} placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            name="number"
            type="number"
            validate={(value) => {
              if (value.length !== 11) {
                return "Number must be 11 digits";
              }

              return null;
            }}
          >
            <Label>Number</Label>
            <Input
              className={"rounded-md"}
              maxLength={11}
              placeholder="Phone Number"
            />
            <FieldError />
          </TextField>
          <TextField
            name="bio"
            validate={(value) => {
              if (value.length < 10) {
                return "Bio must be at least 10 characters";
              }

              return null;
            }}
          >
            <Label>Your Address</Label>
            <TextArea
              className={"rounded-md"}
              placeholder="Your Address"
            />
            <Description>Minimum 10 characters</Description>
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}