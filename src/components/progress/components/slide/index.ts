import "./styles.css";
import { fillArray } from "../../../../utils/helpers";
import { isLevelPassed } from "../../../../levels";
import Button from "../../../button";
import Start from "../../../start";

export default (
  slide = 0,
  isDisabled = false,
  total = 20
) => /*html*/ `<div class="sli wh jc">${fillArray(total)
  .map((v) => {
    const level = v + total * slide;
    return /*html*/ `<div class="sli-w">${Button(
      `b-${level}`,
      `${level + 1}`,
      "",
      "",
      60,
      isDisabled
    )}${isLevelPassed(level) ? Start() : ""}</div>`;
  })
  .join("")}
</div>`;
