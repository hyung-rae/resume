import { Badge, Flex, RingProgress, Title } from '@mantine/core'

type BadgeProps = {
  name: string
  color: string
  value: number
  top?: number
  left?: number
}

const BADGES: BadgeProps[] = [
  { name: 'Next.js', color: '#16423C', value: 25, top: 10, left: 62 },
  { name: 'React', color: '#54C392', value: 10, top: 60, left: 69 },
  { name: 'Typescript', color: '#7EAA92', value: 10, top: 85, left: 61 },
  { name: 'React Query', color: '#00425A', value: 15, top: 85, left: 23 },
  { name: 'Emotion', color: '#BAD1C2', value: 10, top: 65, left: 19 },
  { name: 'react-hook-form', color: '#15B392', value: 20, top: 15, left: 13 },
]

const ETC_BADGES: BadgeProps[] = [
  { name: 'Git', color: '', value: 0 },
  { name: 'Git Hub', color: '', value: 0 },
  { name: 'zod', color: '', value: 0 },
  { name: 'Recoil', color: '', value: 0 },
  { name: 'SCSS', color: '', value: 0 },
  { name: 'Notion', color: '', value: 0 },
  { name: 'Slack', color: '', value: 0 },
]

const Skill = () => {
  return (
    <Flex direction="column">
      <Title order={4} c="teal">
        기술
      </Title>

      <Flex direction="column" align="center" style={{ position: 'relative' }}>
        {BADGES.map((badge) => (
          <SkillBadge key={badge.name} {...badge} />
        ))}

        <RingProgress
          size={300}
          thickness={30}
          sections={BADGES}
          roundCaps
          label={
            <Title order={5} c="gray" ta="center">
              사용 빈도
            </Title>
          }
        />
      </Flex>

      <Flex gap="sm" wrap="wrap" mt="md" justify="center">
        {ETC_BADGES.map((badge) => (
          <Badge variant="outline" color="gray" radius="sm">
            {badge.name}
          </Badge>
        ))}
      </Flex>
    </Flex>
  )
}

export default Skill

const SkillBadge = ({ name, color, top = 0, left = 0 }: BadgeProps) => {
  return (
    <Badge
      variant="filled"
      color={color}
      size="md"
      radius="sm"
      style={{ position: 'absolute', top: `${top}%`, left: `${left}%` }}
    >
      {name}
    </Badge>
  )
}
