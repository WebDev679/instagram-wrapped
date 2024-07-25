import React, {useState} from "react";
import WrappedContainer from "./WrappedContainer";
import MainHeading from "./MainHeading";
import InfoText from "./InfoText";
import MutedText from "./MutedText";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import heroImage from "@/app/hero1.png";
import Image from "next/image";
import Footer from "../Footer";
import Modal from "./Modal"; // Assume you have a Modal component


function IntroInformation({
  onContinue,
  onDemo,
}: {
  onContinue: () => void;
  onDemo: () => void;
}) {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);


  const handleDemoClick = () => {
    setShowDemoModal(true);
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
  };

  const handleViewSampleWrapped = () => {
    setShowImageModal(true);
  };

  return (
    <WrappedContainer bg="bg-gradient-to-r from-gray-200 via-blue-200 to-blue-400">
      <div className="h-3/4 flex items-center justify-center p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
        <div className="w-full md:w-full p-4 rounded-lg ">
          <MainHeading className="text-5xl">Instagram Wrapped</MainHeading>
          <MutedText className="text-center">
            To get started, download your Instagram data in <strong>JSON</strong> format from <a href="https://accountscenter.instagram.com/info_and_permissions/dyi/" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline">here</a>. For lower wait time, make sure to download <strong>low</strong> quality data. 
            <br /> Don't worry, it's secure and doesn't include sensitive info.
          </MutedText>
          <Button onClick={onContinue} variant="secondary" className="mt-4 mr-2">
            Let's Begin
            <ArrowRight className="ml-2" size={16} />
          </Button>
          <Button onClick={handleDemoClick} variant="ghost" className="mt-4">
            View Demo
          </Button>
          {showDemoModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded p-4">
                <Button onClick={closeDemoModal} variant="ghost">
                  Close
                </Button>
                <div className="flex flex-col items-center">
                  <Button onClick={handleViewSampleWrapped} variant="ghost" className="mt-4">
                    View Sample Wrapped
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                  <Button onClick={onDemo} variant="ghost" className="mt-4">
                    Play Demo Wrapped
                    <PlayCircle className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}
          {showImageModal && (
            <Modal onClose={handleCloseImageModal}>
              <div className="m-auto w-1/3">
                <Image
                  src={heroImage}
                  alt="Wrapped for Instagram"
                  layout="responsive"
                  width={500}
                  height={200}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
      <Footer />
    </WrappedContainer>
  );
}

export default IntroInformation;
