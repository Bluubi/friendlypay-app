import "./control-group.css";
import { CONTROL } from "../control-type.ts";

export const ControlGroup = ({ controls }: { controls: CONTROL[] }) => {
  return (
    <>
      {controls.map(
        ({ id, label, type, required, initialValue }: CONTROL, key: number) => {
          return (
            <div key={key} className={"control-group"}>
              <label className={"label"} htmlFor={id}>
                {" "}
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={String(type)}
                required={required}
                defaultValue={String(initialValue)}
              />
            </div>
          );
        },
      )}
    </>
  );
};

export function getControlInput(selector: string) {
  return document.querySelector(selector) as HTMLInputElement;
}
