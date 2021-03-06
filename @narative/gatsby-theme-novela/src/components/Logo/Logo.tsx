import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";
import mediaqueries from "@styles/media";

const Logo = () => {
  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#fff" : "#fff";
  return (
    <SVGContainer>
		<svg width="85" height="85" version="1.1" className="Logo_Desktop" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 438.4 187.4">
		<g>
			<g>
				<path d="M109.4,99.7H37.2v67.7H16.4V19.8h20.9v60.7h72.2V19.8h20.9v147.6h-20.9V99.7z" fill={fill}/>
				<path d="M229,122.6V69.8h18.6v97.6h-14.5l-2.5-18.6c-4.5,9.4-16.8,21-35.6,21c-17,0-35.2-9.6-35.2-37.3V69.8h18.6v61.7
					c0,16.5,11,23.3,23.1,23.3C211.4,154.7,228.4,149.9,229,122.6z"fill={fill}/>
				<path d="M341.1,167.4L297.9,36.3v131.1h-19.6V19.8H311L349.9,139l40.3-119.2h31.9v147.6h-19V36.3l-45.2,131.1H341.1z" fill={fill}/>
			</g>
			<g>
				<path d="M175.9,54.9c-0.2,0.7-0.1,0.9,0.3,1.1l4.3,2.7v0.8h-16.3v-0.8l4.9-2.7c0.6-0.3,0.7-0.4,0.8-1.1l6.4-31.5h-5.1
					c-0.8,0-0.9,0.1-1.7,0.9l-6.5,7.9h-0.7l2.2-11H195l-2.2,11h-0.7l-3.1-7.9c-0.4-0.8-0.4-0.9-1.3-0.9h-5.4L175.9,54.9z" fill={fill}/>
				<path d="M197.7,21v-0.7l10-1.8l-5.3,22.7l0.2,0.1c2.6-5.9,7.1-9.3,11.6-9.3c3.1,0,4.6,1.9,4.6,4.6c0,1.7-0.8,4.3-1.4,6.2l-2.6,8.3
					c-0.5,1.5-0.9,2.8-0.9,3.9s0.4,1.5,1.3,1.5c2.2,0,3.8-3.2,4.6-6.2l0.7,0.1c-0.7,4.7-3.2,9.7-8.3,9.7c-2.6,0-4-1.5-4-4.1
					c0-1.6,0.8-4,1.4-5.9l2.7-8.4c0.6-1.7,0.9-3.5,0.9-4.3c0-1.1-0.5-1.7-2-1.7c-1.7,0-4.3,1.1-6.4,4.6c-2.5,3.9-3.5,7.3-6.3,19.3
					h-5.2l7.6-35.1c0.2-0.7,0.2-0.9-0.3-1.3L197.7,21z" fill={fill}/>
				<path d="M224,49.9c0-9.1,6.5-17.8,14.8-17.8c4.6,0,7.6,2.4,7.6,5.7c0,5.8-8,10-16.3,9.4c-0.1,0.8-0.2,1.6-0.2,2.5
					c0,4.5,2.1,6.7,5.7,6.7c3.3,0,7.1-2.7,8.9-6.9l0.7,0.3c-1.7,6.8-6.6,10.3-12,10.3C227.9,60.1,224,56.2,224,49.9z M241.2,37.6
					c0-2.2-1-3.4-2.8-3.4c-3.7,0-6.8,5.7-7.9,11.5C236.7,45.9,241.2,42.1,241.2,37.6z" fill={fill}/>
			</g>
		</g>
		</svg>
      
    </SVGContainer>
  );
};

export default Logo;

const SVGContainer = styled.div`
  ${mediaqueries.phablet`
	 .Logo_Desktop {
		 width: 65px;
		 height: 65px;
	 }
  `}
`;
