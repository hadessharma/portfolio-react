import java from "../../assets/skill-icons/java.png";
import javaScript from "../../assets/skill-icons/javascript.png";
import python from "../../assets/skill-icons/python.png";
import cpp from "../../assets/skill-icons/cpp.png";
import kotlin from "../../assets/skill-icons/kotlin.png";

export interface ImageData {
  img: string;
  title: string;
}
const programmingLanguages: ImageData[] = [
  {
    img: java,
    title: "Java",
  },
  {
    img: javaScript,
    title: "JavaScript",
  },
  {
    img: python,
    title: "Python",
  },
  {
    img: cpp,
    title: "CPP",
  },
  {
    img: kotlin,
    title: "Kotlin",
  },
];

export default programmingLanguages;
