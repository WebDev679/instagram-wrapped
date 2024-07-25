import { z } from "zod";

export const InstagramTimedEntrySchema = z.object({
  href: z.string(),
  value: z.string(), // username
  timestamp: z.number(),
});

export const InstagramAccountConnectionsSchema = z.object({
  followers: z.array(InstagramTimedEntrySchema).optional(),
  following: z.array(InstagramTimedEntrySchema).optional(),
  recentlyUnfollowed: z.array(InstagramTimedEntrySchema).optional(),
  recentFollowRequests: z.array(InstagramTimedEntrySchema).optional(),
});

export const InstagramRecentSearchesSchema = z.object({
  accounts: z.array(InstagramTimedEntrySchema).optional(),
  wordOrPhrase: z.array(InstagramTimedEntrySchema).optional(),
});

export const InstagramProfileChangeSchema = z.object({
  changed: z
    .enum([
      "Profile Bio Text",
      "Username",
      "Profile Photo",
      "Switched to Public",
      "Switched to Private",
    ])
    .or(z.string()),
  timestamp: z.number(),
});

export const InstagramAccountInformationSchema = z.object({
  username: z.string().optional(),
  name: z.string().optional(),
  changes: z.array(InstagramProfileChangeSchema).optional(),
});

export const InstagramDirectMessageSchema = z.object({
  content: z.string(),
  timestamp: z.number(),
  sender: z.string(),
  receiver: z.string(),

  isUserSender: z.boolean(),
  isReelShare: z.boolean(),
  isPostShare: z.boolean(),
  isTikTokShare: z.boolean(),
});

export const InstagramPostSchema = z.object({
  href: z.string(),
  value: z.string(),
  timestamp: z.number(),
  account: z.string(),

  isPost: z.boolean(),
  isReel: z.boolean(),
});

export const InstagramActivitySchema = z.object({
  comments: z.array(InstagramTimedEntrySchema).optional(),
  likedComments: z.array(InstagramTimedEntrySchema).optional(),
  likedPosts: z.array(InstagramPostSchema).optional(),
  recentSearches: InstagramRecentSearchesSchema.optional(),
  participatedPolls: z.array(InstagramTimedEntrySchema).optional(),
  storyLikes: z.array(InstagramTimedEntrySchema).optional(),
  stories: z.array(InstagramTimedEntrySchema).optional(),
  profilePhotos: z.array(InstagramTimedEntrySchema).optional(),
});

export const InstagramExternalTrackedPage = z.object({
  name: z.string(),
  eventAmount: z.number(),
});

export const InstagramUserDataSchema = z.object({
  accountConnections: InstagramAccountConnectionsSchema,
  accountInformation: InstagramAccountInformationSchema,
  directMessages: z.array(InstagramDirectMessageSchema),
  activity: InstagramActivitySchema,
  externalTrackedPages: z.array(InstagramExternalTrackedPage),
});

export const ShareImageDataSchema = z.object({
  name: z.string(),
  storiesPosted: z.number(),
  dmReceived: z.number(),
  topReceiver: z.string(),
  dmSent: z.number(),
  topSender: z.string(),
  reelsShared: z.number(),
  postsLiked: z.number(),
  reelsLiked: z.number(),
  topPostAccount: z.string(),
  topReelAccount: z.string(),
  commentsWritten: z.number(),
});

export type InstagramUserData = z.infer<typeof InstagramUserDataSchema>;
export type ShareImageData = z.infer<typeof ShareImageDataSchema>;

export type InstagramTimedEntry = z.infer<typeof InstagramTimedEntrySchema>;
export type InstagramAccountConnections = z.infer<
  typeof InstagramAccountConnectionsSchema
>;
export type InstagramRecentSearches = z.infer<
  typeof InstagramRecentSearchesSchema
>;
export type InstagramProfileChange = z.infer<
  typeof InstagramProfileChangeSchema
>;
export type InstagramAccountInformation = z.infer<
  typeof InstagramAccountInformationSchema
>;
export type InstagramDirectMessage = z.infer<
  typeof InstagramDirectMessageSchema
>;

export type InstagramPost = z.infer<
  typeof InstagramPostSchema
>;
export type InstagramActivity = z.infer<typeof InstagramActivitySchema>;
export type InstagramExternalTrackedPage = z.infer<
  typeof InstagramExternalTrackedPage
>;
