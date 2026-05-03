
import {
  Modal,
  Button,
  Input,
} from "@heroui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-clinet"; 
import { toast } from "react-toastify";

const UpdateProfile = ({ isOpen, setIsOpen, user }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const { register, getValues, handleSubmit, reset } = useForm({
      defaultValues: {
        name: user?.name || "",
        image: user?.image || "",
      },
    });

    const handleUpdate = async () => {

      const values = getValues();
      
      setIsUpdating(true);
      try {
        const { data: res, error } = await authClient.updateUser({
          name: values.name,
          image: values.image,
        });

        if (error) {
          toast.error(error.message || "Update failed");
        } else {
          toast.success("Profile updated!");
          setIsOpen(false);
          window.location.reload(); 
        }
      } catch (error) {
        console.error("Update Error:", error);
        toast.error("Something went wrong");
      } finally {
        setIsUpdating(false);
      }
    };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen} placement="center">
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[460px]">
            <Modal.CloseTrigger onClick={() => setIsOpen(false)} />
            <Modal.Header>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="flex flex-col gap-4 m-3">
                <Input
                  {...register("name")}
                  label="Full Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  {...register("image")}
                  label="Profile Image URL"
                  placeholder="Paste image link"
                  variant="bordered"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-[#036832] text-white"
                isLoading={isUpdating}
                onPress={handleUpdate}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;