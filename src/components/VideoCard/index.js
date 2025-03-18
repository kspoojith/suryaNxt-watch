import {format, parse} from 'date-fns'
import {
  VideoCardContainer,
  Thumbnail,
  VideoContent,
  Title,
  ProfileImg,
  ChannelName,
  ViewsDetails,
  Views,
  Anology,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

// Custom function to calculate the difference in years
function formatYearsAgo(date) {
  const diffInYears = new Date().getFullYear() - date.getFullYear()
  return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`
}

const VideoCard = props => {
  const {data} = props
  const updatedData = {
    channel: data.channel,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  }
  const {channel, publishedAt, thumbnailUrl, title, viewCount} = updatedData
  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = updatedChannel

  // Parse the published date
  const parsedPublishedAt = parse(publishedAt, 'MMM dd, yyyy', new Date())

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoCardContainer>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoContent>
              <ProfileImg src={profileImageUrl} alt="channel profile" />
              <div>
                <Title darkTheme={isDarkTheme}>{title}</Title>
                <ViewsDetails>
                  <ChannelName darkTheme={isDarkTheme}>{name}</ChannelName>
                  <Anology>
                    <Views darkTheme={isDarkTheme}>{viewCount} views </Views>
                    <Views darkTheme={isDarkTheme}>
                      {formatYearsAgo(parsedPublishedAt)}
                    </Views>
                  </Anology>
                </ViewsDetails>
              </div>
            </VideoContent>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
