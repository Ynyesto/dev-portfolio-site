import Link from "next/link";

// Analytics disabled. This wrapper simply forwards props to Next.js `Link`.
type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  event?: string;
  props?: Record<string, string | number | boolean>;
};

export default function TrackedLink({ href, ...rest }: TrackedLinkProps) {
  return <Link href={href} {...rest} />;
}
