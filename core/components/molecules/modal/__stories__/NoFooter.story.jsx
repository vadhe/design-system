import * as React from 'react';
import { action } from '@/utils/action';
import { Modal, ModalDescription, ModalHeader, ModalBody, ModalFooter, Text, Button } from '@/index';

export const noFooter = () => {
  const [open, setOpen] = React.useState(false);
  const backdropClose = false;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(false);
    action('on close triggered')();
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading',
        }}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
      </Modal>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        dimension={dimension}
        backdropClose={backdropClose}
        onClose={onClose}
        headerOptions={{
          heading: 'Heading',
          subHeading: 'Subheading'
        }}
      >
        <Text>Modal Body</Text>
        <ModalDescription
          title="Description Title"
          description="Adding a subheading clearly indicates the hierarchy of the information."
        />
        <ModalDescription
          description="Card Sections include supporting text like an article summary or a restaurant description."
        />
      </Modal>
    </div>
  );
}`;

export default {
  title: 'Components/Modal/No Footer',
  component: Modal,
  subcomponents: { ModalHeader, ModalBody, ModalDescription, ModalFooter },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Modal',
        noHtml: true,
      },
    },
  },
};
