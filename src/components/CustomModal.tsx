import { Modal } from "antd";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      title="Asal Sedana"
      open={open}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>
        Ro'yxatdan o'tganingiz uchun raxmat. Biz o'zimiz sizga tez orada
        aloqaga chiqamiz ✅
      </p>
    </Modal>
  );
};

export default CustomModal;
