import { Flex, List, Text, Timeline, Title } from '@mantine/core'

const Career = () => {
  return (
    <Flex direction="column" gap="md">
      <Title order={4} c="teal">
        경력
      </Title>

      <Timeline color="teal" active={0} lineWidth={2} bulletSize={10}>
        <Timeline.Item title="스퀘어스" c="teal">
          <Text size="xs">22년 8월 ~ 현재</Text>
          <List c="dark" size="sm" listStyleType="disc" mt="10px">
            <List.Item>
              Qshop 커머스 프로젝트
              <List size="sm" withPadding listStyleType="disc" my="4px" spacing="4px">
                <List.Item>프로젝트 설계 → 런칭 → 운영</List.Item>
                <List.Item>PG 모듈 통합 및 결제 연동 기능 개발</List.Item>
                <List.Item>API 통신 효율화를 위한 React Query & Axios 구조 개선</List.Item>
                <List.Item>hook form 과 zod 를 활용한 form data 검증 구조 개선</List.Item>
              </List>
            </List.Item>
            <List.Item>
              Quv Editor 프로젝트
              <List size="sm" withPadding listStyleType="disc" mt="4px" spacing="4px">
                <List.Item>jquery + php 기반 기능 유지 보수</List.Item>
                <List.Item>DB 조회 등 간단한 SQL 처리</List.Item>
              </List>
            </List.Item>
          </List>
        </Timeline.Item>

        <Timeline.Item title="한국축산데이터" c="dimmed">
          <Text size="xs">22년 3월 ~ 22년 7월</Text>
          <List size="sm" listStyleType="disc" mt="10px">
            <List.Item>
              회사 홈페이지 작업
              <List size="sm" withPadding listStyleType="disc" my="4px" spacing="4px">
                <List.Item>i18n 라이브러리를 활용 영문으로 정보를 제공할 수 있게 개발</List.Item>
                <List.Item>Framer Motion을 활용한 애니메이션 구현</List.Item>
              </List>
            </List.Item>
            <List.Item>
              팜스플랜 관리자용 서비스 개발
              <List size="sm" withPadding listStyleType="disc" mt="4px" spacing="4px">
                <List.Item>MUI 라이브러리 기반 빠른 MVP 개발</List.Item>
              </List>
            </List.Item>
          </List>
        </Timeline.Item>

        <Timeline.Item title="공부선배" c="dimmed">
          <Text size="xs">21년 8월 ~ 21년 10월</Text>
          <List size="sm" listStyleType="disc" mt="10px">
            <List.Item>JAVA 웹 개발자</List.Item>
            <List.Item>서비스 유지 보수</List.Item>
          </List>
        </Timeline.Item>
      </Timeline>
    </Flex>
  )
}
export default Career
