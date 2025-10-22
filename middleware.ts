// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { createOryMiddleware } from "@ory/nextjs/middleware"
import oryConfig from "@/ory.config"

// This function can be marked `async` if using `await` inside
export const middleware = createOryMiddleware(oryConfig)

export const config = {}
