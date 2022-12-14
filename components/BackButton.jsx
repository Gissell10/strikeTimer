import { Icon } from "@iconify/react";
export default function BackButton(props) {
  return (
    <button {...props} className="btn-back">
      <Icon icon="ph:arrow-fat-line-left-duotone" /> Back
    </button>
  );
}
