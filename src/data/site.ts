export const site = {
  name: 'Wilfred Chetat',
  email: 'yekuwilfred@gmail.com',
  links: {
    github: 'https://github.com/mecca1991',
    linkedin: 'https://www.linkedin.com/in/wilfred-chetat/',
    // Served from S3 so it can change without a deploy: `npm run cv:upload`
    cv: 'https://wilfredchetat-public.s3.us-east-1.amazonaws.com/Wilfred_Chetat_CV.pdf',
  },
} as const;
