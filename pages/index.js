import ModalTerminal from "/components/Terminal/ModalTerminal";
import AvatarHover from "/components/Avatar/AvatarHover";
import CircleItem from "/components/CircleCarousel/CircleItem";
import CircleCarousel from "../components/CircleCarousel/CircleCarousel";
import { TypeAnimation } from "react-type-animation";

import {GET_ALL_BLOG_POSTS} from "../gql/queries";
import graphQLClient from "../gql/GraphQLClientToHYgraph";

export default function Home({posts}) {
  return (
    <div className={"mx-auto w-4/5"}>
      <div className={"mt-5 flex justify-end w-2/3 float-right"}>
        <TypeAnimation
          sequence={[
            "I am a Front-End developer!",
            1000,
            "I am a Computer Science student!",
            1000,
            "I am a passionate about learning new things!",
            1000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "20px", textAlign: "right" }}
        />
      </div>
      <CircleCarousel>
        <CircleItem icon={"React"} />
        <CircleItem icon={"CPP"} />
        <CircleItem icon={"C"} />
        <CircleItem icon={"JavaScript"} />
        <CircleItem icon={"Redux"} />
        <CircleItem icon={"Next"} />
        <CircleItem icon={"WordPress"} />
      </CircleCarousel>
      <div
        className={
          "absolute bottom-0 w-1/3 flex flex-col justify-center items-center"
        }
      >
        <ModalTerminal />
        <AvatarHover />
      </div>
    </div>
  );
}

export async function getStaticProps() {
    const posts = await graphQLClient.request(GET_ALL_BLOG_POSTS);
    return {
        props: {
            posts,
        },
    }
}
