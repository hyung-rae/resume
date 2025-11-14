import {
  autoUpdate,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { BsMouse } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { IoPhonePortrait } from "react-icons/io5"
import { MdAlternateEmail } from "react-icons/md"
import "./Intro.css"

const Intro = () => {
  return (
    <div className="intro">
      <div className="header">
        <LogoDropdown />

        <GithubButton />
      </div>

      <div className="section">
        <h1>사용자 경험과 개발 효율을 균형있게 고민하는</h1>
        <h1>
          4년차 프론트엔드 개발자 <strong>우형래</strong> 입니다.
        </h1>
      </div>

      <div className="section">
        <p>
          주로 React / Next.js 기반 <b> 커머스 플랫폼과 관리자 시스템</b>을
          설계하고 구현해 왔으며
        </p>
        <p>
          Framer Motion을 활용한 인터랙티브 UI로 <b>전환율 30% 향상</b>
        </p>
        <p>
          <b>모킹 시스템 도입</b>으로 개발 일정 단축 등의 성과를 냈습니다.
        </p>
      </div>

      <div className="section">
        <p>
          <b> MVP 5주 출시 경험</b>과 기술 부채 개선을 통해 안정적이고 확장
          가능한 서비스를 만들어왔습니다.
        </p>

        <p>당장의 속도도, 장기적인 유지보수도 놓치지 않는 개발을 지향합니다.</p>
      </div>

      <motion.div
        className="scroll-icon"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BsMouse />
        <span>Scroll</span>
      </motion.div>
    </div>
  )
}

export default Intro

const GithubButton = () => {
  return (
    <button className="github-button">
      <FaGithub />
      <span>Github</span>
    </button>
  )
}

const LogoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    strategy: "fixed",
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: isOpen ? () => setIsOpen(false) : () => setIsOpen(true),
    whileElementsMounted: autoUpdate,
    middleware: [offset(8)],
  })
  const click = useClick(context, { event: "mousedown" })
  const dismiss = useDismiss(context)
  const { getReferenceProps, getItemProps } = useInteractions([dismiss, click])

  return (
    <>
      <button
        className="logo-dropdown"
        ref={refs?.setReference}
        {...getReferenceProps()}
      >
        <img src="/favicon.png" alt="logo" />
      </button>

      {isOpen && (
        <ul
          className="dropdown"
          ref={refs?.setFloating}
          style={floatingStyles}
          {...getItemProps({})}
        >
          <li>
            <a href="tel:01049069135">
              <IoPhonePortrait />
              <span>010-4906-9135</span>
            </a>
          </li>

          <li>
            <a href="mailto:woohr1109@gmail.com">
              <MdAlternateEmail />
              <span>woohr1109@gmail.com</span>
            </a>
          </li>
        </ul>
      )}
    </>
  )
}
