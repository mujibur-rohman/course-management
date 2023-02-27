import React from "react";
import { Button, FileInput, Input, Modal, Textarea } from "react-daisyui";

const FormContent = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header className="font-bold">Add Content</Modal.Header>

      <Modal.Body>
        <form className="flex flex-col gap-3">
          <Input type="text" placeholder="Title" className="w-full" />
          <Textarea
            size="md"
            placeholder="Description..."
            // disabled
            className="resize-none h-44 w-full"
          />
          <div>
            <FileInput className="w-full" />
            <label className="text-xs">File must be type image or video</label>
          </div>
        </form>
      </Modal.Body>

      <Modal.Actions className="flex">
        <Button
          variant="outline"
          color="error"
          className="min-w-[6rem]"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          className="min-w-[6rem]"
          onClick={() => setIsOpen(false)}
        >
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FormContent;
