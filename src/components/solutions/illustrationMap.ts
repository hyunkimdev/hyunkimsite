import { PaymentsIllustration } from "./illustrations/PaymentsIllustration";
import { BillingIllustration } from "./illustrations/BillingIllustration";
import { AgenticIllustration } from "./illustrations/AgenticIllustration";
import { IssuingIllustration } from "./illustrations/IssuingIllustration";
import { BorderlessIllustration } from "./illustrations/BorderlessIllustration";
import { EmbedIllustration } from "./illustrations/EmbedIllustration";

export const ILLUSTRATIONS = {
  payments: PaymentsIllustration,
  billing: BillingIllustration,
  agentic: AgenticIllustration,
  issuing: IssuingIllustration,
  borderless: BorderlessIllustration,
  embed: EmbedIllustration,
} as const;

export type IllustrationKey = keyof typeof ILLUSTRATIONS;
