import Link from "next/link";
import React from "react";
import Animation from "./Animation";

export default function hero() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 소윤입니다
          <br className="hidden lg:inline-block" />
          Nextjs, tailwind로 포폴 만들기
        </h1>
        <p className="mb-8 leading-relaxed">
          것은 간에 싸인 별과 가는 동산에는 그들의 위하여서. 있는 산야에 사랑의
          있으랴? 따뜻한 청춘이 방황하였으며, 열락의 것이 든 스며들어 원대하고,
          얼마나 이것이다. 풀이 무엇을 같지 수 부패뿐이다. 구하지 피부가 인생을
          속잎나고, 그러므로 보내는 동력은 위하여서. 소리다.이것은 두손을 이
          풀이 발휘하기 살 할지니, 원대하고, 같이, 철환하였는가? 이상이 찾아
          천고에 사막이다. 위하여, 이상이 천하를 청춘 반짝이는 새가 얼마나 속에
          속에서 것이다. 우리 예수는 방지하는 것이다. 넣는 있는 품에 착목한는
          얼마나 칼이다. 되는 넣는 찾아 목숨이 찾아다녀도, 품으며, 이상 아니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
    </>
  );
}
