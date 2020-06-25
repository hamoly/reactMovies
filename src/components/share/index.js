import React from 'react';
import ShowStaticMsg from '../msg/showstaticmsg'
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
  const Share = (props) => {
    let {likedListId} = props
    let link = `${process.env.REACT_APP_WEBSITE_URL}${likedListId}`
    console.log(likedListId)
    return (
        <div className="row share">
        <div className="col-10">
        <ShowStaticMsg msg="Share your liked movies" />
        <EmailShareButton className="p-2" url={link}>
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <FacebookShareButton className="p-2" url={link}>
            <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton className="p-2" url={link}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton className="p-2" url={link}>
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        </div>
        <div className="col-2">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MERDQjNGRDk5ODExMUVBQkM0M0ZEN0NDRjFGODNDNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MERDQjNGRTk5ODExMUVBQkM0M0ZEN0NDRjFGODNDNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgwRENCM0ZCOTk4MTExRUFCQzQzRkQ3Q0NGMUY4M0M1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgwRENCM0ZDOTk4MTExRUFCQzQzRkQ3Q0NGMUY4M0M1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0j3HIwAAApRJREFUeNrEl01IFVEUx+fmJC/F6GNTagQtW1SUQZtXS81FLUKoRRG1C4JKqHQRUYsWZR9QKyEJCUyQqCAIiqLZREWLPhZB0kLMCoOMKJN0+t3XeTFMd2bu6Lx5B/537lzO95x77h3l+75TTZqXuUZP1YKroM2GXWWeAU8tZfwMfoHNTtF/nm8GHEdH9BUsADdwqDFvB4K0CtzCiYZqOaCpRTJRk5cDP+UzBGkr6I0vQk8VGNeBWoOCf/xglMIaNhTffMYmsBLcBgsN8meQ7f7fAU8tY35H0pVEr1CyRoy6Et0OsAk0g/oE+YPIXy6/uPI8aWlc00Ux3s54CmxI+YkuITuGE0PBDHxgvhz8BpOS6jDp9QMIDsLfw/zIHOrkB2hDl1fOQEGeN0FnRHFOIvAJ433M986xUOvAgK4ZN9A8NE1gZCSmy53PwHiZRkzbsCbG+HbGwxkZfy+Fa9kHPLWI8UpGxsfBNjI9mqYR7ZY9bkPTMX1EN6kOjL8Ob8O46HVDORbDoU++Z+AJeFGqo789ZbHhkNqH8UfBRdciohZD9DrKu6AfPETpeMDhuogMdMI3EF60cWBX6P0eOIGypxH8BcPaWfgvmJjdhPQ3SKstR30cRedSFl0/MkfRVWT+kvlEmtNwhXRITftnYfw+MntkCz8GW9Iex03C04eiayluRLoA34GdGNcBXI/KeJIDa8EU6E4R9bfSiec4rTj9RTJYH+q41kW4utS1iv5Ha/NFfzrUtGbEsJrNjUjf6cYqeV9LysADaSy5OTAVSufpDGx8D13pYh3YSNV2BU7FyG9nSTOyk1Tg3eiAPpuXgPWCSpAOZjiqCHty+D/QjehN3LX8kFwS3ApE/hZ0mbazqvbv+R8BBgB5r7wJJKxlpQAAAABJRU5ErkJggg==" alt="Share your liked movies" />
        </div>
        </div>
          )
  }

  export default Share