import { Timeline, Text, Flex, List } from '@mantine/core'

const Career = () => {
  return (
    <Flex direction="column" gap="sm">
      <Timeline color="teal" active={0} lineWidth={2} bulletSize={12}>
        <Timeline.Item title="스퀘어스" c="teal">
          <Text size="xs" mb={4}>
            22년 8월 ~ 현재
          </Text>
          <List c="dark" size="sm" listStyleType="disc" m="xs" spacing="xs">
            <List.Item>
              Qshop 커머스 프로젝트
              <List size="sm" withPadding listStyleType="disc" m="xs">
                <List.Item></List.Item>
                <List.Item></List.Item>
              </List>
            </List.Item>
            <List.Item>
              Quv Editor 프로젝트
              <List size="sm" withPadding listStyleType="disc" m="xs">
                <List.Item></List.Item>
              </List>
            </List.Item>
          </List>
        </Timeline.Item>

        <Timeline.Item title="한국축산데이터" c="dimmed">
          <Text size="xs" mb={4}>
            22년 3월 ~ 22년 7월
          </Text>
          <List size="sm" listStyleType="disc" m="xs" spacing="xs">
            <List.Item>
              회사 홈페이지 작업
              <List size="sm" withPadding listStyleType="disc" m="xs">
                <List.Item>i18n 라이브러리를 활용 영문으로 정보를 제공할 수 있게 개발</List.Item>
                <List.Item>Framer Motion을 활용한 애니메이션 구현</List.Item>
              </List>
            </List.Item>
            <List.Item>
              팜스플랜 관리자용 서비스 개발
              <List size="sm" withPadding listStyleType="disc" m="xs">
                <List.Item>MUI 라이브러리 기반 빠른 MVP 개발</List.Item>
              </List>
            </List.Item>
          </List>
        </Timeline.Item>

        <Timeline.Item title="공부선배" c="dimmed">
          <Text size="xs" mb={4}>
            21년 8월 ~ 21년 10월
          </Text>
          <List size="sm" listStyleType="disc" m="xs" spacing="xs">
            <List.Item>JAVA 웹 개발자</List.Item>
            <List.Item>서비스 유지 보수</List.Item>
          </List>
        </Timeline.Item>
      </Timeline>
    </Flex>
  )
}
export default Career
