import { CONTROL } from "../../../core/control-type.ts";
import "./control-group.css";

export const ControlGroup = ({ controls }: { controls: CONTROL[] }) => {
  return (
    <>
      {controls.map(
        ({ id, label, type, initialValue }: CONTROL, key: number) => {
          return (
            <div key={key} className={"control-group"}>
              <label htmlFor={id}> {label}</label>
              <input
                id={id}
                name={id}
                type={String(type)}
                defaultValue={String(initialValue)}
              />
            </div>
          );
        },
      )}
    </>
  );
};
