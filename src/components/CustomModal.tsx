import { Modal } from "antd";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  message: string
}

const   CustomModal: React.FC<CustomModalProps> = ({ open, onClose , message}) => {
  return (
    <Modal
      title="Asal Sedana"
      open={open}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>
        {message}
      </p>
    </Modal>
  );
};

export default CustomModal;
