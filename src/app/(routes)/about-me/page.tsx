import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage/>
      <ContainerPage>
      <Avatar />
        <h1>Toda mi 
          <span>trayectoria laboral</span>
        </h1>
      </ContainerPage>
    </>
  );
}

export default PageAboutMe;
