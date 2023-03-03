import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import styles from './Banner.module.scss'

interface Props {
	bannerImage: string
	bannerParagraphs?: string[]
	imageOpacity?: number
}

export default function Banner({ bannerImage, bannerParagraphs, imageOpacity }: Props) {
	return (
		<div>
			<ChakraProvider>
				{/* <ColorModeSwitch /> */}
				<Box
					className={styles.banner}
					_before={{
						content: '""',
						bgImage:
							`url(${bannerImage})`,
						bgSize: 'cover',
						pos: 'absolute',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						opacity: (imageOpacity) || 0.4
					}}
				>
					{
						bannerParagraphs?.map((text, index) => (
							<h2 key={index} className={styles.banner__text}>{text}</h2>
						))
					}
				</Box>
			</ChakraProvider>
		</div>
	)
}